export const InfoCard = ({ title, productsLength, borderColor }) => {
    return (
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
    )
}