'use client'

import { Box, Text, FormControl, Input } from '@chakra-ui/react';
import { useState } from 'react';

export default function Navigation() {
    const [active, setActive] = useState(0);
    const navArray = [
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z" fill="#191919" />
            </svg>,
            text: "Dashboard"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.23914 10.3913C4.25355 6.15071 7.7029 2.72471 11.9435 2.73912C16.1841 2.75353 19.6101 6.20288 19.5957 10.4435V10.5304C19.5435 13.2869 18.0043 15.8348 16.1174 17.8261C15.0382 18.9467 13.8331 19.9388 12.5261 20.7826C12.1766 21.0849 11.6582 21.0849 11.3087 20.7826C9.36021 19.5143 7.65008 17.9131 6.25653 16.0522C5.01449 14.4294 4.30931 12.4597 4.23914 10.4174V10.3913Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.9174 13C13.2765 13 14.3783 11.8982 14.3783 10.5391C14.3783 9.17999 13.2765 8.07822 11.9174 8.07822C10.5583 8.07822 9.45654 9.17999 9.45654 10.5391C9.45654 11.8982 10.5583 13 11.9174 13Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            text: "Listings"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.5789 12.0561C14.2177 12.0561 16.3569 9.91686 16.3569 7.27803C16.3569 4.6392 14.2177 2.5 11.5789 2.5C8.94007 2.5 6.80087 4.6392 6.80087 7.27803C6.80087 9.91686 8.94007 12.0561 11.5789 12.0561Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00002 18.7014C3.99873 18.3655 4.07385 18.0337 4.2197 17.7311C4.67736 16.8158 5.96798 16.3307 7.03892 16.111C7.81128 15.9462 8.59431 15.836 9.38217 15.7815C10.8408 15.6533 12.3079 15.6533 13.7666 15.7815C14.5544 15.8367 15.3374 15.9468 16.1099 16.111C17.1808 16.3307 18.4714 16.77 18.9291 17.7311C19.2224 18.3479 19.2224 19.064 18.9291 19.6808C18.4714 20.6419 17.1808 21.0812 16.1099 21.2918C15.3384 21.4634 14.5551 21.5766 13.7666 21.6304C12.5794 21.7311 11.3866 21.7494 10.1968 21.6854C9.92221 21.6854 9.65677 21.6854 9.38217 21.6304C8.59663 21.5773 7.81632 21.4641 7.04807 21.2918C5.96798 21.0812 4.68652 20.6419 4.2197 19.6808C4.0746 19.3747 3.99955 19.0401 4.00002 18.7014Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            text: "Profile"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.6389 14.3958H17.5906C16.1042 14.3949 14.8994 13.1909 14.8985 11.7045C14.8985 10.218 16.1042 9.01413 17.5906 9.01321H21.6389" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.0486 11.6429H17.7369" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.74766 3H16.3911C19.2892 3 21.6388 5.34951 21.6388 8.24766V15.4247C21.6388 18.3229 19.2892 20.6724 16.3911 20.6724H7.74766C4.84951 20.6724 2.5 18.3229 2.5 15.4247V8.24766C2.5 5.34951 4.84951 3 7.74766 3Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.03561 7.53818H12.4346" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            text: "Users"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.6389 14.3958H17.5906C16.1042 14.3949 14.8994 13.1909 14.8985 11.7045C14.8985 10.218 16.1042 9.01413 17.5906 9.01321H21.6389" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.0486 11.6429H17.7369" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.74766 3H16.3911C19.2892 3 21.6388 5.34951 21.6388 8.24766V15.4247C21.6388 18.3229 19.2892 20.6724 16.3911 20.6724H7.74766C4.84951 20.6724 2.5 18.3229 2.5 15.4247V8.24766C2.5 5.34951 4.84951 3 7.74766 3Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.03561 7.53818H12.4346" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            text: "Account"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3.09264 9.40427H20.9166" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.4421 13.3097H16.4513" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.0046 13.3097H12.0139" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.55789 13.3097H7.56715" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.4421 17.1962H16.4513" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.0046 17.1962H12.0139" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.55789 17.1962H7.56715" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.0437 2V5.29078" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.9655 2V5.29078" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2383 3.57919H7.77096C4.83427 3.57919 3 5.21513 3 8.22222V17.2719C3 20.3262 4.83427 22 7.77096 22H16.229C19.175 22 21 20.3546 21 17.3475V8.22222C21.0092 5.21513 19.1842 3.57919 16.2383 3.57919Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            text: "Request"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8066 6.62358L18.1842 5.54349C17.6576 4.62957 16.4907 4.31429 15.5755 4.83869V4.83869C15.1399 5.09531 14.6201 5.16812 14.1307 5.04106C13.6413 4.91399 13.2226 4.59749 12.9668 4.16134C12.8023 3.88412 12.7139 3.56836 12.7105 3.24601V3.24601C12.7254 2.72919 12.5304 2.22837 12.17 1.85764C11.8096 1.48691 11.3145 1.27783 10.7975 1.27805H9.54348C9.03695 1.27804 8.5513 1.47988 8.19398 1.83891C7.83667 2.19795 7.63716 2.68456 7.63959 3.19109V3.19109C7.62458 4.23689 6.77246 5.07678 5.72655 5.07667C5.4042 5.07332 5.08844 4.98491 4.81122 4.82038V4.82038C3.89605 4.29598 2.7291 4.61126 2.20252 5.52519L1.53433 6.62358C1.00839 7.53636 1.31938 8.70258 2.22998 9.23228V9.23228C2.82189 9.57401 3.18652 10.2056 3.18652 10.889C3.18652 11.5725 2.82189 12.204 2.22998 12.5458V12.5458C1.32054 13.0719 1.00921 14.2353 1.53433 15.1453V15.1453L2.16591 16.2346C2.41263 16.6798 2.82659 17.0083 3.31618 17.1474C3.80577 17.2866 4.33062 17.2249 4.77461 16.976V16.976C5.21106 16.7213 5.73117 16.6515 6.21932 16.7822C6.70748 16.9128 7.12322 17.233 7.37415 17.6716C7.53868 17.9489 7.62709 18.2646 7.63044 18.587V18.587C7.63044 19.6435 8.48694 20.5 9.54348 20.5H10.7975C11.8505 20.5 12.7055 19.6491 12.7105 18.5961V18.5961C12.7081 18.088 12.9089 17.6 13.2681 17.2407C13.6274 16.8814 14.1155 16.6806 14.6236 16.6831C14.9452 16.6917 15.2596 16.7797 15.5389 16.9394V16.9394C16.4517 17.4653 17.6179 17.1543 18.1476 16.2437V16.2437L18.8066 15.1453C19.0617 14.7075 19.1318 14.186 19.0012 13.6963C18.8706 13.2067 18.5502 12.7893 18.111 12.5366V12.5366C17.6717 12.2839 17.3514 11.8665 17.2208 11.3769C17.0902 10.8873 17.1602 10.3658 17.4153 9.92793C17.5812 9.63831 17.8214 9.39817 18.111 9.23228V9.23228C19.0161 8.70286 19.3264 7.54346 18.8066 6.63274V6.63274V6.62358Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="10.1751" cy="10.889" r="2.63616" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            text: "Settings"
        }
    ]
    return (
        <Box display="flex" alignItems='center' justifyContent="space-between" width="100%" backgroundColor="#fff" height={67} pr={78} pl={78} boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)">
            <Box display="flex" alignItems='center' justifyContent="space-evenly" width="70%">
                {
                    navArray.map((nav, index) => {
                        return <>
                            <Box display="flex" alignItems='center' justifyContent="space-between" key={index} 
                            style={active === index ? {width: "fit-content", height: 38 + "px", background: "#F5F5F5", borderRadius: 8 + "px", padding: 5 + "px"} : {width: "fit-content", height: 38 + "px", display: "flex", alignItems: "center"}}
                            onClick={() => {
                                setActive(index);
                            }}
                            >
                                {/*<Image src="/image/Profile-2.png" alt="nav-image" width={24} height={24} />*/}
                                {nav.svg}
                                <Text fontSize={14} fontWeight={600} pl={2}  className={active === index ? "ActiveNavigationLink" : "InctiveNavigationLink"}>{nav.text}</Text>
                            </Box>
                        </>
                    })
                }
            </Box>
            <Box width='25%'>
                <FormControl>
                    <Box display="flex" width='100%' height={43} border="1px solid #E4E4E4" background='#F5F5F5' borderRadius={12} alignItems="center">
                        <Input type='search' placeholder="Search... properties, customers here" className='search-input'/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M11.7666 20.7552C16.7308 20.7552 20.7551 16.7309 20.7551 11.7666C20.7551 6.80236 16.7308 2.77805 11.7666 2.77805C6.80233 2.77805 2.77802 6.80236 2.77802 11.7666C2.77802 16.7309 6.80233 20.7552 11.7666 20.7552Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.0183 18.4851L21.5423 22" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </Box>
                 
                </FormControl>
            </Box>
        </Box>
    )
}