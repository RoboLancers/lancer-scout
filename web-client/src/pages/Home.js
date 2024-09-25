import React from "react"

const HomePage = () => {
    return (
        <div className="home-page">
            <h1 id="welcome-to-lancer-scout">Welcome to Lancer Scout</h1>

            <p>Lancer Scout is a custom scouting suite developed by Team 321 The RoboLancers.</p>
            <p>Lancer Scout was built with several criteria in mind:</p>

            <ul>
                <li><p>Fully offline experience for competitions</p>
                </li>
                <li><p>Quick data transfer for real time usage</p>
                </li>
                <li><p>Highly customizable scouting forms</p>
                </li>
                <li><p>Minimalist data analytics and visualization</p>
                </li>
                <li><p>Easy transitions between tournaments</p>
                </li>
            </ul>

            <h2 id="table-of-contents">Table of Contents</h2>

            <ul>
                <li><p><a href="#how-it-works-(overview">How It Works (Overview)</a>)</p>
                </li>
                <li><p><a href="#documentation">Documentation</a></p>
                </li>
                <li><p><a href="#notes-for-programmers">Notes For Programmers</a></p>
                </li>
            </ul>

            <h2 id="how-it-works-overview-">How It Works (Overview)</h2>
            
            <p>The scouting process starts from the <strong>Lancer Scout Dashboard</strong>. The dashboard has several pages that control the flow of the scouting operation:</p>
            
            <ul>
                <li><p><strong>The Tournament Page</strong> is for creating and managing different tournaments. Using different tournaments allows for easy data separation across events.</p>
                </li>
                <li><p><strong>The Schema Page</strong> is for designing the forms that scouts will use. Each <em>schema</em> (scouting form) can be built with the editor on this page to avoid the need to do this programmatically. It includes basic presets for a match scouting form and a pit scouting form which can then be modified.</p>
                </li>
                <li><p><strong>The Upload Page</strong> is for transferring scout data from individual scouters to the main scouting dashboard. Scouts will upload each scouting report via QR Code which the upload page will read and integrate with its database for the current tournament.</p>
                </li>
                <li><p><strong>The Data Page</strong> is for analyzing the current tournament. There are several tabs within the data page to view pit scouts, team overviews, individual performances of a team, compare teams, and rank teams.</p>
                </li>
            </ul>

            <p>The dashboard is used for managing the scouting operation, so most scouts will only be using the <strong><a href="https://lancer-scout-321.vercel.app/">Lancer Scout Client</a></strong> to collect and later trasfer data.</p>
            <p>Lancer Scout Client is a mobile-friendly offline website. Using PWA features, the website will save itself to your device after you enter for the first time on WiFi.</p>
            <p>Scouts will upload the schemas created on the dashboard via URL which will allow them to scout using the specific form you created. It is important to make sure scouts are using the right schema across different tournaments or you will run into compatability issues when trying to transfer data.</p>
            <p>After they have collected a sufficient amount of data at an event, have the scouts return back to the management team and transfer their data so it can be analyzed on the dashboard.</p>
            
            <h2 id="documentation">Documentation</h2>
            
            <p>TODO:</p>
            
            <ul>
                <li><p>installation/script/docker</p>
                </li>
                <li><p>explain each page on dashboard</p>
                </li>
                <li><p>explain each page on client</p>
                </li>
                <li><p>best practices</p>
                </li>
            </ul>

            <h2 id="notes-for-programmers">Notes For Programmers</h2>
            
            <p>TODO:</p>

            <ul>
                <li><p>language and framework choices</p>
                </li>
                <li><p>repo organization and code structure</p>
                </li>
                <li><p>known issues</p>
                </li>
                <li><p>contributions and future considerations</p>
                </li>
            </ul>
        </div>
    )
}

export default HomePage