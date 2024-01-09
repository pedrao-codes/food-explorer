import { useState } from "react"
import { useEffect } from "react"
import { api } from "../services/api"

export function useProducts() {
    const [products, setProducts] = useState({})

    useEffect(() => {
        async function fetchProducts() {
          const response = await api.get("/products", {})
          setProducts(response.data)
        }
    
        fetchProducts()
      }, [])

    return ({ products })
}