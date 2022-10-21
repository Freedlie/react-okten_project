// import React, {useLayoutEffect, useState} from 'react';
//
// const useHideForm = () => {
//     const [display, setDisplay] = useState(
//         localStorage.getItem('form-switch') || 'showform'
//     )
//
//     useLayoutEffect(() => {
//         document.documentElement.setAttribute('display-form', display)
//         localStorage.setItem('form-switch', display)
//     }, [display])
//
//     return { display, setDisplay }
// };
//
// export {useHideForm};
//
