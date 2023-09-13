<template>
    <div>

        <nav id="navbar" class="fixed header w-full z-20 top-0 left-0 border-b  border-gray-200 py-3">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" class="flex items-center">
                    <span class="self-center text-2xl font-bold whitespace-nowrap font-mont text-white">SO<span
                            class="text-indigo-500">NICS</span></span>
                </a>
                <div class="flex md:order-2">
                    <button type="button"
                        class="text-white bg-gradient-to-r from-indigo-500 to-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2 text-center mr-3 md:mr-0 uppercase">Contact
                        Us</button>
                    <button data-collapse-toggle="navbar-sticky" type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 :hover:bg-gray-700 "
                        aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul
                        class="flex flex-col p-4 md:p-0 mt-4 font-poppins border border-gray-100 rounded-lg text-white md:flex-row md:space-x-16 md:mt-0 md:border-0">
                        <li>
                            <a href="#"
                                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 uppercase text-sm"
                                aria-current="">Home</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-white uppercase text-sm">Service</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-white uppercase text-sm">About</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-white uppercase text-sm">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    <div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'App',
}
</script>
<style src="../style.css" />