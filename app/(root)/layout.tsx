import { ReactNode } from 'react'
import { Toaster } from 'sonner'

const Rootlayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="root-layout">
            <nav>
                <a href="/" className="flex items-center gap-2">
                    <img src="/logo.svg" alt="logo" width={38} height={32} />
                    <h2 className='text-primary-100'>PrepPal AI</h2>
                </a>
            </nav>

            {children}

            <Toaster />

        </div>
    )
}

export default Rootlayout
