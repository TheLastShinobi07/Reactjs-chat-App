import React from "react";
import { FaVideo, FaPhoneAlt } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { MdSend } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { BsEmojiGrin } from "react-icons/bs";
import './ChatUI.css';

export default function ChatUI(){
    return(
        <main>
            <nav>
                <div className="left">
                    <div className="img">
                        <img src="https://i.pinimg.com/originals/1b/e2/9b/1be29b7fc26f3c7afbadf1a3a6fa579f.jpg" alt="" />
                    </div>
                    <h2>Sunil</h2>
                </div>
                <ul>
                    <li><FaVideo /></li>
                    <li><FaPhoneAlt /></li>
                    <li><CiMenuKebab /></li>
                </ul>
            </nav>

            <section className="message-section">
                <div className="messages">
                    <h3 className="msg-top">All your messages are encrypted end to end</h3>
                    <div className="received">
                        Hello
                    </div>

                    <div className="sent">
                        Hello
                    </div>
                    
                    
                    
                    
                </div>

                <div className="send-msg">
                    <form action="" method="post">
                        <div>
                            <button><BsEmojiGrin /></button>
                            <button><IoMdAdd /></button>
                            <input type="text" name="msg-txt" id="msg-txt" />
                            <button><MdSend /></button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}