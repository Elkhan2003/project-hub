import React from "react";
import style from "./wrapper.module.css";

export const Wrapper = () => {
	return (
		<div>
			<div className={style.wrapper}>
				<div className={style.wrap}>
					<header className={style.header}>Привет</header>
					<main className={style.main}>
						<section>
							<div>Body</div>
						</section>
					</main>
					<footer className={style.footer}>Конец</footer>
				</div>
			</div>
		</div>
	);
};
