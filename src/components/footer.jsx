'use client'

import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { useTranslation } from 'react-i18next'
import { Button } from './button'
import { Container } from './container'
import { Gradient } from './gradient'
import { Link } from './link'
import { Logo } from './logo'
import { Subheading } from './text'

function SitemapHeading({ children }) {
  return <h3 className="py-1 text-sm/6 font-semibold text-white">{children}</h3>
}

function SitemapLinks({ children }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink({ children, className, ...props }) {
  return (
    <li>
      <Link
        {...props}
        className={`font-medium text-white transition-colors duration-200 flex items-center group ${className || ''}`}
      >
        <span className="w-0 group-hover:w-2 h-0.5 bg-white rounded-full mr-0 group-hover:mr-2 transition-all duration-300" />
        {children}
      </Link>
    </li>
  )
}

function Sitemap() {
  const { t } = useTranslation('Home')
  return (
    <>
      <div>
        <SitemapHeading>{t('footer_sections_product_title')}</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="#">
            {t('footer_sections_product_analysis')}
          </SitemapLink>
          <SitemapLink href="#">{t('footer_sections_product_api')}</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>{t('footer_sections_company_title')}</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="#">
            {t('footer_sections_company_careers')}
          </SitemapLink>
          <SitemapLink href="/blog">
            {t('footer_sections_company_blog')}
          </SitemapLink>
          <SitemapLink href="/company">
            {t('footer_sections_company_aboutUs')}
          </SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>{t('footer_sections_support_title')}</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="#">
            {t('footer_sections_support_helpCenter')}
          </SitemapLink>
          <SitemapLink href="#">
            {t('footer_sections_support_community')}
          </SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>{t('footer_sections_legal_title')}</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="#">{t('footer_sections_legal_terms')}</SitemapLink>
          <SitemapLink href="#">
            {t('footer_sections_legal_privacy')}
          </SitemapLink>
        </SitemapLinks>
      </div>
    </>
  )
}

function SocialIconLinkedIn(props) {
  return (
    <svg viewBox="0 0 16 16" fill="white" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://www.linkedin.com/company/useteam"
        target="_blank"
        aria-label="Visit us on LinkedIn"
        className="text-gray-950 data-hover:text-gray-950/75"
      >
        <SocialIconLinkedIn className="size-6" />
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-white">
      &copy; {new Date().getFullYear()} UseTeam
    </div>
  )
}

export function Footer() {
  const { t } = useTranslation('Home')
  return (
    <footer>
      <div className="relative px-4 py-4 lg:px-8 lg:py-12">
        <Gradient className="relative mb-2 rounded-4xl ring-1 ring-black/5 ring-inset">
          <Container>
            <div className="relative mb-12 border-b border-gray-200/40 py-24 text-center">
              <hgroup>
                <Subheading className="text-white">
                  {t('footer_sections_getStarted')}
                </Subheading>
                <p className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {t('footer_cta_title')}
                </p>
              </hgroup>
              <p className="mx-auto mt-6 max-w-xs text-sm/6 font-semibold text-gray-300">
                {t('footer_cta_subtitle')}
              </p>
              <div className="mt-10">
                <Button className="w-full sm:w-auto" href="/contact">
                  {t('footer_cta_button')}
                </Button>
              </div>
            </div>

            <PlusGrid className="pb-16">
              <PlusGridRow showBackdrop={false}>
                <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
                  <div className="col-span-2 flex items-start justify-start">
                    <PlusGridItem className="pt-6 lg:pb-6">
                      <Logo />
                    </PlusGridItem>
                  </div>
                  <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6">
                    <Sitemap />
                  </div>
                </div>
              </PlusGridRow>
              <PlusGridRow
                showBackdrop={false}
                className="flex justify-between"
              >
                <div>
                  <PlusGridItem className="py-3">
                    <Copyright />
                  </PlusGridItem>
                </div>
                <div className="flex">
                  <PlusGridItem className="flex items-center gap-5 py-3">
                    <SocialLinks />
                  </PlusGridItem>
                </div>
              </PlusGridRow>
            </PlusGrid>
          </Container>
        </Gradient>
      </div>
    </footer>
  )
}
