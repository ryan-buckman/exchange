<script>
    let isMenu = false;
    let isList;

    function handleMenuClick(value){
        isMenu = value;
    }

</script>

{#if isMenu }
<div id="mobile-nav" class="w-full xl:hidden h-full absolute z-40">
    <div on:click|preventDefault={() => handleMenuClick(false)} class="bg-gray-800 opacity-50 inset-0 fixed w-full h-full"></div>
    <div class="w-64 z-20 absolute left-0 top-0 bg-white shadow flex-col justify-between transition duration-150 ease-in-out h-full">
        <div class="flex flex-col justify-between h-full">
            <div class="px-6 pt-4 overflow-y-auto">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <svg aria-label="Home" id="logo" enable-background="new 0 0 300 300" height="43"
                            viewBox="0 0 300 300" width="43" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g>
                                <path fill="#4c51bf"
                                    d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z">
                                </path>
                            </g>
                        </svg>
                        <p data-cy="mobile-nav-heading" class="text-bold md:text2xl text-base pl-3 text-gray-800">Exchange</p>
                    </div>
                    <div on:click|preventDefault={() => handleMenuClick(false)} id="cross" class="text-gray-800 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                </div>
                <ul class="f-m-m">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a>
                        <li class="text-white pt-8">
                            <div class="flex items-center">
                                <div class="md:w-6 md:h-6 w-5 h-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M7.16667 3H3.83333C3.3731 3 3 3.3731 3 3.83333V7.16667C3 7.6269 3.3731 8 3.83333 8H7.16667C7.6269 8 8 7.6269 8 7.16667V3.83333C8 3.3731 7.6269 3 7.16667 3Z"
                                            stroke="#667EEA" stroke-width="1" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M7.16667 11.6667H3.83333C3.3731 11.6667 3 12.0398 3 12.5V15.8333C3 16.2936 3.3731 16.6667 3.83333 16.6667H7.16667C7.6269 16.6667 8 16.2936 8 15.8333V12.5C8 12.0398 7.6269 11.6667 7.16667 11.6667Z"
                                            stroke="#667EEA" stroke-width="1" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M16.1667 11.6667H12.8333C12.3731 11.6667 12 12.0398 12 12.5V15.8334C12 16.2936 12.3731 16.6667 12.8333 16.6667H16.1667C16.6269 16.6667 17 16.2936 17 15.8334V12.5C17 12.0398 16.6269 11.6667 16.1667 11.6667Z"
                                            stroke="#667EEA" stroke-width="1" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M16.1667 3H12.8333C12.3731 3 12 3.3731 12 3.83333V7.16667C12 7.6269 12.3731 8 12.8333 8H16.1667C16.6269 8 17 7.6269 17 7.16667V3.83333C17 3.3731 16.6269 3 16.1667 3Z"
                                            stroke="#667EEA" stroke-width="1" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <p class="text-indigo-500 ml-3 text-lg cursor-pointer">Dashboard</p>
                            </div>
                        </li>
                    </a>
            </ul>
        </div>
        <div class="w-full">
            <div class="flex justify-center mb-4 w-full px-6">
                <div class="relative w-full">
                    <div class="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search"
                            width="16" height="16" viewBox="0 0 24 24" stroke-width="1" stroke="#A0AEC0"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <circle cx="10" cy="10" r="7"></circle>
                            <line x1="21" y1="21" x2="15" y2="15"></line>
                        </svg>
                    </div>
                    <input
                        class="bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500 pl-10 py-2"
                        type="text" placeholder="Search" />
                </div>
            </div>
            <div class="border-t border-gray-300">
                <div class="w-full flex items-center justify-between px-6 pt-1">
                    <div class="flex items-center">
                       
                    </div>
                    <ul class="flex">
                        <li class="cursor-pointer text-white pt-5 pb-3">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-messages" width="24" height="24"
                                viewBox="0 0 24 24" stroke-width="1" stroke="#718096" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10">
                                </path>
                                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
                            </svg>
                        </li>
                        <li class="cursor-pointer text-white pt-5 pb-3 pl-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#718096"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <path
                                    d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6">
                                </path>
                                <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
{/if}
<nav class="w-full mx-auto bg-white shadow">
    <div class="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
        <div class="h-full flex items-center">
            <div class="mr-10 flex items-center">
                <svg aria-label="Home" id="logo" enable-background="new 0 0 300 300" height="44"
                    viewBox="0 0 300 300" width="43" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g>
                        <path fill="#4c51bf"
                            d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z" />
                    </g>
                </svg>
                <h3 data-cy="nav-heading" class="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">Exchange</h3>
            </div>
            <ul class="pr-12 xl:flex items-center h-full hidden">           
                <li class="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-indigo-700 tracking-normal border-b-2 border-indigo-700">
                    <a sveltekit:prefetch href="/">Dashboard</a>
                </li>
            </ul>
        </div>
        <div class="h-full xl:flex items-center justify-end hidden">
            <div class="w-full h-full flex items-center">
                <div class="w-full pr-12 h-full flex items-center">
                    <div class="relative w-full">
                        <div class="text-gray-500 absolute ml-3 inset-0 m-auto w-4 h-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search"
                                width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="10" cy="10" r="7" />
                                <line x1="21" y1="21" x2="15" y2="15" />
                            </svg>
                        </div>
                        <input
                            class="border border-gray-100 focus:outline-none focus:border-indigo-700 w-56 rounded text-sm text-gray-500 bg-gray-100 pl-8 py-2"
                            type="text" placeholder="Search" />
                    </div>
                </div>
                <div class="w-full flex">
                    <!-- <div class="w-32 h-full flex items-center justify-center border-r cursor-pointer text-gray-600">
                        
                    </div> -->                  
                </div>
            </div>
        </div>
        <div class="visible xl:hidden flex items-center">
            <div>
                <div on:click|preventDefault={() => handleMenuClick(true)} id="menu" class="text-gray-800 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</nav>