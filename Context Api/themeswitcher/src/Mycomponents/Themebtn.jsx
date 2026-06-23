import React from 'react'
import useTheme from '../mycontext/theme';

export default function ThemeBtn() {
    const { thememode, lighttheme, darktheme } = useTheme();

    const onChangeBtn = (e) => {
        const darkmodestatus = e.target.checked;

        if (darkmodestatus) {
            darktheme();
        } else {
            lighttheme();
        }
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={thememode === 'dark'}
            />

       <div className="relative w-12 h-6 bg-[#4A3427] rounded-full peer peer-checked:bg-[#C6A664] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:w-5 after:h-5 after:bg-[#F5E6D3] after:rounded-full after:transition-all after:duration-300 peer-checked:after:translate-x-6"></div>

           <span className="ml-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
    Theme Switcher
</span>
        </label>
    );
}