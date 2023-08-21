import HeaderLayout from "@/app/Layouts/HeaderLayout/page";
import style from '@/app/Styles/Catalog.module.scss';


const CatalogComponent=()=>{
    return(
        <HeaderLayout>
            <button className={style.catalog}>Catalog</button>
        </HeaderLayout>
    )
}

export default CatalogComponent;