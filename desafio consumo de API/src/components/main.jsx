import React from 'react'

const Main = () => {
    const logoDBZ = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3eb70ccc-e7ad-4e1a-87fa-f97df9ef1c52/d8rx6aw-7aed38dd-576b-47cc-b0b0-a24803f1f2fe.png/v1/fill/w_1024,h_576/dragon_ball_z__dbz__nuevo_logo_by_saodvd_d8rx6aw-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvM2ViNzBjY2MtZTdhZC00ZTFhLTg3ZmEtZjk3ZGY5ZWYxYzUyXC9kOHJ4NmF3LTdhZWQzOGRkLTU3NmItNDdjYy1iMGIwLWEyNDgwM2YxZjJmZS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.oYKaNgd3mlbQkcOGM5ZCJnb4RG0bBOxr3j5rSPCpSPg"
    return (
        <main>
            <div className='logo'>
                <img src={logoDBZ} alt="logo DBZ" />
            </div>
            <div className='' id='titulos'>
                <h4><a className='text-decoration-none' href="...">INICIO</a></h4>
                <h4><a className='text-decoration-none' href="...">DRAGON BALL Z</a></h4>
                <h4><a className='text-decoration-none' href="...">PERSONAJES</a></h4>
                <h4><a className='text-decoration-none' href="...">CONTACTO</a></h4>
            </div>
        </main>
    )
}

export default Main