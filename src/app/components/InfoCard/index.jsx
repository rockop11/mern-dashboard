import Link from "next/link"

export const InfoCard = ({ title, productsLength, borderColor, link }) => {
    return (
        <Link href={`${link}`} >
            <div className={`
                shadow-md
                rounded-md
                p-2
                m-4
                border-l-8
                ${borderColor}
            `}>
                {title}: {productsLength}
            </div>
        </Link>
    )
}