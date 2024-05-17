import React from 'react'
import { FaCaretDown } from "react-icons/fa";
import worldimg from "../asset/img/world.png"

const Hearder = () => {
	return (
		<div className='header_container'>
			<div className='header_container_sub1'>
				<div>
					<div></div>
					<div></div>
				</div>

				<div className='create_account_container'>
					<img src={worldimg} alt="world" className='worldimg' />
					<span className='create_account'>Create Account</span>
				</div>
			</div>
			<div className='header_container_sub2'>
				<p>Personal</p>
				<FaCaretDown />
			</div>
		</div>
	)
}

export default Hearder