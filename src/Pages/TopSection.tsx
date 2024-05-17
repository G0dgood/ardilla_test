import React from 'react'
import Hearder from '../component/Hearder'
import phone from "../asset/img/phonePaper.svg"

const TopSection = () => {
	return (
		<div className='top_section_container'>
			<Hearder />
			<section className='section_one_container'>
				<h1 className='access_h1'>Your Access To More</h1>
				<p>Ardilla helps you save and invest in achieving your financial goals, we have the most flexible and seamless way to grow your funds.</p>

				<button className='started_btn'>Get Started</button>
			</section>


			<div className='phone_image_container'>
				<img src={phone} alt="phone" />
			</div>
		</div>
	)

}

export default TopSection