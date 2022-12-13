import React from 'react'
import { Slot } from 'react-page-layout';


export default function PublicDefaultLayout() {
    return (
        <div className="main-wrapper">
            <div className="content-wrapper">
                <Slot name="main" component="section" className="content p-0" />
            </div>
        </div>
    )
}
