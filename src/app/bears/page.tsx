"use client"

import Button from "../components/button"
import { useBearStore } from "./_store"
import { usePersistStore } from "./helpers"

export default function Page() {

    const store = usePersistStore(useBearStore, (state) => state)

    return (
        <div className="flex w-full h-screen items-center flex-col justify-center">
            <div>Quantos ursos temos na loja? {store?.bears}</div>

            {store && (
                <div className="flex flex-col">
                    <Button onclick={store?.increase} label="Aumentar" />
                    <Button onclick={store?.decrease} label="Diminuir" />
                </div>
            )}
        </div >
    )
}