import { IconButton } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'
import { LinkedIn, Facebook, Instagram, GitHub} from '@mui/icons-material'
import './Contact.css'

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact_container'>
            <p>
                Email: <span>balaji.s.1808@gmail.com</span>
            </p>
            <p>
                Github Username: <a href='https://github.com/Balaji-1808'>@balaji_s(Balaji-1808)</a>
            </p>
            <div className='contact__Icon'>
                <a href='https://www.linkedin.com/in/balaji-s-265015224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                    <IconButton>
                        <LinkedIn/>
                    </IconButton>
                </a>

                <a href='https://www.facebook.com/share/15ddvLjHYj/'>
                    <IconButton>
                        <Facebook/>
                    </IconButton>
                </a>

                <a href='https://www.instagram.com/_balaji.s_04?igsh=MjBwNWxlZXBkYWZl'>
                    <IconButton>
                        <Instagram/>
                    </IconButton>
                </a>
            </div>
        </div>
    </Element>
  )
}

export default Contact