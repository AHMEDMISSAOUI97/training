import React, { createContext, ReactElement, useEffect, useState } from "react"

export type ProductType = {
    sku: string,
    name: string,
    price: number
};

const initState: ProductType[] = [];

export type UseProductsContextType = {
    products: ProductType[]
};

const initContextState: UseProductsContextType = {
    products: []
};

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type childrenType = {
    children?: ReactElement | ReactElement[]
};

export const ProductProvider = ({ children }: childrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState);

    useEffect(()=>{
        const fetchProducts=async():Promise<ProductType[]> =>{
            const data = await fetch('http://localhost:3500/products').then(res =>{
               return res.json()
            }).catch((err)=>{
                if(err instanceof Error) console.log(err.message)
            })
            return data
        }
        fetchProducts().then(products=>setProducts(products))
    }),[]

    return (
        <ProductsContext.Provider value={{ products }} >
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext;