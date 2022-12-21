import React from 'react'
import './style.css'

export default function RecentStories() {
    return (
        <div className="RecentStories">
            <h2>RECENT STORIES</h2>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src="https://dlcdnrog.asus.com/rog/media/1671489856612.webp" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="col">
                        <img src="https://dlcdnrog.asus.com/rog/media/1670893994624.webp" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="col">
                        <img src="https://dlcdnrog.asus.com/rog/media/1669857154768.webp" class="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <img src="https://dlcdnrog.asus.com/rog/media/166864109730.webp" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="col">
                        <img src="https://dlcdnrog.asus.com/rog/media/1667344658657.webp" class="d-block w-100" alt="..."></img>
                    </div>
                </div>
            </div>
            <a href="">LEARN MORE</a>
        </div>
    )
}