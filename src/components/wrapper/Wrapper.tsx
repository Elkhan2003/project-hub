import React from "react";
import style from "./wrapper.module.css";

import { Routes, Route, Link } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";

export const Wrapper = () => {
	return (
		<div>
			<div className={style.wrapper}>
				<div className={style.wrap}>
					<header className={style.header}>Привет</header>
					<main className={style.main}>
						<section>
							<div className={style.content}>
								<Routes>
									<Route path="/" element={<Home />} />
									<Route path="Contact" element={<Contact />} />
								</Routes>
							</div>
						</section>
					</main>
					<footer className={style.footer}>Конец</footer>
				</div>
			</div>
		</div>
	);
};
