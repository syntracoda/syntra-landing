"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import {
  type MenuItem,
  type MenuKey,
  directNavLinks,
  navMenus,
} from "@/lib/site-data";

import { CTAButton } from "./CTAButton";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function MenuLink({
  children,
  className,
  href,
  onClick,
  onFocus,
}: {
  children: React.ReactNode;
  className: string;
  href: string;
  onClick?: () => void;
  onFocus?: () => void;
}) {
  if (isExternalHref(href)) {
    return (
      <a href={href} className={className} onClick={onClick} onFocus={onFocus}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick} onFocus={onFocus}>
      {children}
    </Link>
  );
}

function DropdownPanel({
  items,
  onSelect,
}: {
  items: MenuItem[];
  onSelect: () => void;
}) {
  return (
    <div className="absolute left-1/2 top-[calc(100%+0.85rem)] z-30 w-[22rem] -translate-x-1/2 rounded-[1.5rem] border border-[var(--line)] bg-white p-3 shadow-[0_24px_80px_rgba(36,51,79,0.12)]">
      <div className="grid gap-2">
        {items.map((item) => (
          <MenuLink
            key={`${item.title}-${item.href}`}
            href={item.href}
            onClick={onSelect}
            className="group rounded-2xl border border-transparent px-4 py-3 transition hover:border-[rgba(37,99,235,0.14)] hover:bg-[linear-gradient(135deg,rgba(124,58,237,0.045),rgba(36,201,255,0.08))] hover:shadow-[0_10px_24px_rgba(37,99,235,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <p className="text-sm font-semibold text-[var(--foreground)] transition group-hover:text-[var(--accent-strong)]">
              {item.title}
            </p>
            <p className="mt-1 text-sm leading-5 text-slate-500 transition group-hover:text-slate-600">
              {item.description}
            </p>
          </MenuLink>
        ))}
      </div>
    </div>
  );
}

function MobileAccordion({
  label,
  items,
  overviewHref,
  isOpen,
  onToggle,
  onSelect,
}: {
  label: string;
  items: MenuItem[];
  overviewHref: string;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: () => void;
}) {
  return (
    <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left text-sm font-semibold text-[var(--foreground)]"
      >
        <span>{label}</span>
        <span className="text-xs text-slate-400">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen ? (
        <div className="mt-3 grid gap-2">
          <Link
            href={overviewHref}
            onClick={onSelect}
            className="rounded-2xl border border-[rgba(37,99,235,0.12)] bg-[linear-gradient(135deg,rgba(124,58,237,0.04),rgba(36,201,255,0.08))] px-3 py-3 text-sm font-semibold text-[var(--navy-soft)]"
          >
            View {label}
          </Link>
          {items.map((item) => (
            <MenuLink
              key={`${label}-${item.title}-mobile`}
              href={item.href}
              onClick={onSelect}
              className="rounded-2xl px-3 py-3 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <p className="text-sm font-semibold text-[var(--foreground)]">
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-5 text-slate-500">
                {item.description}
              </p>
            </MenuLink>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey | null>(null);

  const menuEntries = useMemo(
    () => Object.entries(navMenus) as [MenuKey, (typeof navMenus)[MenuKey]][],
    [],
  );

  const cancelCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleCloseMenu = () => {
    cancelCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setOpenMenu(null);
      closeTimerRef.current = null;
    }, 220);
  };

  const openMenuNow = (menu: MenuKey) => {
    cancelCloseTimer();
    setOpenMenu(menu);
  };

  const closeAllMenus = () => {
    cancelCloseTimer();
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  };

  useEffect(() => {
    const clearMenus = () => {
      cancelCloseTimer();
      setOpenMenu(null);
      setMobileOpen(false);
      setMobileSection(null);
    };

    const onPointerDown = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        clearMenus();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        clearMenus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      cancelCloseTimer();
    };
  }, []);

  const isActiveHref = (href: string) => {
    if (isExternalHref(href)) {
      return false;
    }

    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div
      ref={navRef}
      className="rounded-[2rem] border border-[var(--line)] bg-white/80 px-4 py-4 shadow-[0_10px_32px_rgba(36,51,79,0.04)]"
    >
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-sm">
            <Image
              src="/images/syntra-logo.png"
              alt="Syntra"
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-[0.04em] text-[var(--navy-soft)]">
              Syntra
            </p>
            <p className="text-sm text-slate-500">
              AI Workforce OS for business operations
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {menuEntries.slice(0, 3).map(([key, menu]) => (
            <div
              key={key}
              className="relative -mb-4 pb-4"
              onMouseEnter={() => openMenuNow(key)}
              onMouseLeave={scheduleCloseMenu}
            >
              <MenuLink
                href={menu.overviewHref}
                onFocus={() => openMenuNow(key)}
                className={[
                  "flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition hover:bg-white hover:text-[var(--accent-strong)]",
                  isActiveHref(menu.overviewHref)
                    ? "bg-white text-[var(--accent-strong)]"
                    : "text-slate-600",
                ].join(" ")}
              >
                <span>{menu.label}</span>
                <span className="text-xs text-slate-400">
                  {openMenu === key ? "-" : "v"}
                </span>
              </MenuLink>
              {openMenu === key ? (
                <>
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-full h-4 w-[22rem] -translate-x-1/2"
                  />
                  <DropdownPanel items={menu.items} onSelect={closeAllMenus} />
                </>
              ) : null}
            </div>
          ))}

          {directNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "rounded-full px-3 py-2 text-sm font-semibold transition hover:bg-white hover:text-[var(--accent-strong)]",
                isActiveHref(link.href)
                  ? "bg-white text-[var(--accent-strong)]"
                  : "text-slate-600",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}

          <div
            className="relative -mb-4 pb-4"
            onMouseEnter={() => openMenuNow("resources")}
            onMouseLeave={scheduleCloseMenu}
          >
            <MenuLink
              href={navMenus.resources.overviewHref}
              onFocus={() => openMenuNow("resources")}
              className={[
                "flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition hover:bg-white hover:text-[var(--accent-strong)]",
                isActiveHref(navMenus.resources.overviewHref)
                  ? "bg-white text-[var(--accent-strong)]"
                  : "text-slate-600",
              ].join(" ")}
            >
              <span>Resources</span>
              <span className="text-xs text-slate-400">
                {openMenu === "resources" ? "-" : "v"}
              </span>
            </MenuLink>
            {openMenu === "resources" ? (
              <>
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-full h-4 w-[22rem] -translate-x-1/2"
                />
                <DropdownPanel
                  items={navMenus.resources.items}
                  onSelect={closeAllMenus}
                />
              </>
            ) : null}
          </div>
        </nav>

        <div className="hidden xl:block">
          <CTAButton href="/request-access" size="sm">
            Request Access
          </CTAButton>
        </div>

        <div className="xl:hidden">
          <button
            type="button"
            onClick={() => {
              setMobileOpen((current) => !current);
              setOpenMenu(null);
            }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--foreground)] shadow-sm"
          >
            <span>Menu</span>
            <span className="text-xs text-slate-400">
              {mobileOpen ? "-" : "v"}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="mt-4 grid gap-3 xl:hidden">
          {menuEntries.map(([key, menu]) => (
            <MobileAccordion
              key={`mobile-${key}`}
              label={menu.label}
              items={menu.items}
              overviewHref={menu.overviewHref}
              isOpen={mobileSection === key}
              onToggle={() =>
                setMobileSection((current) => (current === key ? null : key))
              }
              onSelect={closeAllMenus}
            />
          ))}
          {directNavLinks.map((link) => (
            <Link
              key={`mobile-${link.href}`}
              href={link.href}
              onClick={closeAllMenus}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--foreground)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/resources"
            onClick={closeAllMenus}
            className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--foreground)]"
          >
            Resources
          </Link>
          <CTAButton href="/request-access" size="sm">
            Request Access
          </CTAButton>
        </div>
      ) : null}
    </div>
  );
}
