import React from 'react'
import { Link } from 'react-router-dom'

function FooterSection() {
    return (
        <div>
            <div className="flex justify-center items-center w-full h-[290px] bg-sorrell-brown">
                <div className="w-[90%] h-full flex flex-row py-[50px]">
                    <div className="w-2/6">
                        <div className="font-font2 text-4xl font-bold text-white-smoke mb-[44px]">CulinaryCrest</div>
                        <div className="flex items-center">
                            <ul className={`flex flex-col text-lg  font-font3 text-white-smoke ml-[40px]`}>
                                <li className='cursor-pointer mb-2' ><Link to="/">HOME</Link></li>
                                <li className='cursor-pointer mb-2' ><Link to="/about">ABOUT</Link></li>
                                <li className='cursor-pointer mb-2' ><Link to="/#allrecipe-section">ALL RECIPES</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-2/6 flex items-end justify-center">
                        <div className="h-[30px] flex flex-row space-x-6">
                            <img className='invert h-[30px]' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB2aWV3Qm94PSIwIDAgMTQwIDE0MCIgd2lkdGg9IjE0MCIgaGVpZ2h0PSIxNDAiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDUuODMzMzMzMzMzMzMzMzMzLDAsMCw1LjgzMzMzMzMzMzMzMzMzMywwLDApIj48cGF0aCBkPSJNMTkuNTUsMTQuNTZhLjUuNSwwLDAsMS0uNS40NEgxN2EuNS41LDAsMCwwLS41LjV2OGEuNS41LDAsMCwwLC41LjVoNmExLDEsMCwwLDAsMS0xVjFhMSwxLDAsMCwwLTEtMUgxQTEsMSwwLDAsMCwwLDFWMjNhMSwxLDAsMCwwLDEsMUgxMmEuNS41LDAsMCwwLC41LS41di04QS41LjUsMCwwLDAsMTIsMTVIMTBhLjUuNSwwLDAsMS0uNS0uNXYtM0EuNS41LDAsMCwxLDEwLDExaDJhLjUuNSwwLDAsMCwuNS0uNVY5LjE5QTUuNjksNS42OSwwLDAsMSwxOC4xOSwzLjVIMTkuNUEuNS41LDAsMCwxLDIwLDRWN2EuNS41LDAsMCwxLS41LjVIMTguMTlBMS42OSwxLjY5LDAsMCwwLDE2LjUsOS4xOVYxMC41YS41LjUsMCwwLDAsLjUuNWgyLjQzYS41LjUsMCwwLDEsLjUuNTZaIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIwIj48L3BhdGg+PC9nPjwvc3ZnPg==" alt="" />
                            <img className='invert h-[30px]' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB2aWV3Qm94PSIwIDAgMTQwIDE0MCIgd2lkdGg9IjE0MCIgaGVpZ2h0PSIxNDAiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDUuODMzMzMzMzMzMzMzMzMzLDAsMCw1LjgzMzMzMzMzMzMzMzMzMywwLDApIj48cGF0aCBkPSJNNy4xMywyMi4zNmEuNC40LDAsMCwwLC4yOS4zM2guMTFhLjQ1LjQ1LDAsMCwwLC4zNi0uMiwxMi44LDEyLjgsMCwwLDAsMi4xOS00Yy4wOS0uMzMuMzktMS41Mi42MS0yLjM3YS4yNS4yNSwwLDAsMSwuNC0uMTMsNC4xMiw0LjEyLDAsMCwwLDIuNTMuODhjMy45LDAsNi43My0zLjU3LDYuNzMtOC40OCwwLTMuNTEtMi45NC03LjEzLTcuODYtNy4xM0M3LDEuMjksMy42NSw1LjIzLDMuNjUsOWMwLDIuMzUsMSw0LjE1LDIuNjIsNC44MmEuNjYuNjYsMCwwLDAsLjk0LS40N2wuMjQtMWEuODIuODIsMCwwLDAtLjIyLS45LDMuMjUsMy4yNSwwLDAsMS0uNzMtMi4yLDUuNDcsNS40NywwLDAsMSw1LjY3LTUuNWMyLjkzLDAsNC43NSwxLjY3LDQuNzUsNC4zNiwwLDMuNS0xLjUzLDYuMTQtMy41Niw2LjE0QTEuNzMsMS43MywwLDAsMSwxMiwxMy43YTEuNTgsMS41OCwwLDAsMS0uMjgtMS4zOGMuMTMtLjU0LjMtMS4xLjQ3LTEuNjVBMTAuMTksMTAuMTksMCwwLDAsMTIuNzcsOCwxLjg0LDEuODQsMCwwLDAsMTAuODksNkM5LjQ1LDYsOC4zMyw3LjQzLDguMzMsOS4zMWE1LjEzLDUuMTMsMCwwLDAsLjMyLDEuNzkuNS41LDAsMCwxLDAsLjI5TDcuMTcsMTcuN0ExMy4zOCwxMy4zOCwwLDAsMCw3LjEzLDIyLjM2WiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMCI+PC9wYXRoPjwvZz48L3N2Zz4=" alt="" />
                            <img className='invert h-[30px]' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB2aWV3Qm94PSIwIDAgMTQwIDE0MCIgd2lkdGg9IjE0MCIgaGVpZ2h0PSIxNDAiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDUuODMzMzMzMzMzMzMzMzMzLDAsMCw1LjgzMzMzMzMzMzMzMzMzMywwLDApIj48cGF0aCBkPSJNMTcuNSwwSDYuNUE2LjUxLDYuNTEsMCwwLDAsMCw2LjV2MTFBNi41MSw2LjUxLDAsMCwwLDYuNSwyNGgxMUE2LjUxLDYuNTEsMCwwLDAsMjQsMTcuNVY2LjVBNi41MSw2LjUxLDAsMCwwLDE3LjUsMFpNMTIsMTcuNUE1LjUsNS41LDAsMSwxLDE3LjUsMTIsNS41LDUuNSwwLDAsMSwxMiwxNy41Wm02LjUtMTFBMS41LDEuNSwwLDEsMSwyMCw1LDEuNSwxLjUsMCwwLDEsMTguNSw2LjVaIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIwIj48L3BhdGg+PC9nPjwvc3ZnPg==" alt="" />
                        </div>
                    </div>
                    <div className="w-2/6 flex items-end justify-end">
                        <div className="text-lg  font-font3 text-white-smoke">2024@CulinaryCrest</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection