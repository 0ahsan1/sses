import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import Counter2 from "@/components/sections/Counter2"
import Services1 from "@/components/sections/Services1"

export default function Service() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout breadcrumbTitle="Services">
            <Services1 />

            </Layout>
        </>
    )
}