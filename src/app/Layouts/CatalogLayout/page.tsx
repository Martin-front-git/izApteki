import CatalogList from '@/app/components/header/CatalogList/page'
import React, { ReactNode } from 'react'

interface CatalogLayoutProps {
    children: ReactNode;
  }
  

const CatalogLayout:React.FC<CatalogLayoutProps> = ({children}) => {
  return (
    <>
        <div>
            <CatalogList/>
        </div>
        <div>
            {children}
        </div>

    </>
  )
}

export default CatalogLayout