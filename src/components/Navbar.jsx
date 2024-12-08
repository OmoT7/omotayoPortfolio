import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation();
    const navigation = [
        { 
            name: 'Homepage', 
            href: '/', 
            current: location.pathname === '/' || location.hash === '#/'
        },
        { 
            name: 'Projects', 
            href: '/projects', 
            current: location.pathname === '/projects' || location.hash === '#/projects' 
        }
    ]
    
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    
    return (
        <Disclosure 
            as="nav" 
            className="relative bg-[#020314] text-[#D1D5DB]"
        >
            {/* Gradient Background Overlay */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 rounded-full opacity-50 blur-3xl animate-slow-spin"></div>
            </div>

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative z-10">
                <div className="relative flex h-16 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div className="hidden sm:ml-6 sm:block w-full">
                            <div className="flex w-full">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            // Base styles for all buttons
                                            'flex-1 text-center rounded-md px-3 py-2 text-lg font-medium',
                                            'transition-all duration-300 ease-in-out',
                                            'relative overflow-hidden group',
                                            
                                            // Active page styles
                                            item.current
                                                ? 'bg-gradient-to-br from-cyan-500/40 via-blue-500/40 to-purple-500/40 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                                                : 'text-[#D1D5DB]',
                                            
                                            // Hover styles
                                            !item.current && 'hover:bg-gradient-to-br hover:from-cyan-500/20 hover:via-blue-500/20 hover:to-purple-500/20',
                                            !item.current && 'hover:text-white',
                                            !item.current && 'hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                                        )}
                                    >
                                        {/* Hover effect layer */}
                                        {!item.current && (
                                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
                                        )}
                                        <span className="relative z-10">{item.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden bg-[#020314]">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as={Link}
                            to={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                // Base styles for all buttons
                                'block rounded-md px-3 py-2 text-base font-medium w-full text-center',
                                'transition-all duration-300 ease-in-out',
                                'relative overflow-hidden group',
                                
                                // Active page styles
                                item.current
                                    ? 'bg-gradient-to-br from-cyan-500/40 via-blue-500/40 to-purple-500/40 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                                    : 'text-[#D1D5DB]',
                                
                                // Hover styles
                                !item.current && 'hover:bg-gradient-to-br hover:from-cyan-500/20 hover:via-blue-500/20 hover:to-purple-500/20',
                                !item.current && 'hover:text-white',
                                !item.current && 'hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                            )}
                        >
                            {/* Hover effect layer */}
                            {!item.current && (
                                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
                            )}
                            <span className="relative z-10">{item.name}</span>
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}