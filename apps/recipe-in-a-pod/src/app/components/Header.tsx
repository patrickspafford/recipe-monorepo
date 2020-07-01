import React from "react"
import { AppBar } from "@material-ui/core"

const Header = () => (
        <nav style={{ display: 'flex'}}>
            <div style={{ float: 'left'}}>
                <h1 style={{ margin: '60px' }}>
                    Recipe-In-A-Pod
                </h1>
            </div>
            <div style={{ float: 'right' }}>
                <li style={{ display: 'inline-block', padding: '60px', }}>Save</li>
                <li style={{ display: 'inline-block', padding: '60px', }}>My Recipe Pods</li>
            </div>
        </nav>
)

export default Header