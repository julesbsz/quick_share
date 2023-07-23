"use client";

import { gsap } from "gsap";
import styles from "../styles/EnterAnimation.module.css";
import React, { useLayoutEffect, useRef } from "react";
React.useLayoutEffect = React.useEffect;

function EnterAnimation() {
	const container = useRef();
	const logo = useRef();
	const title = useRef();

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to(logo.current, {
				transform: "scale(1)",
				duration: 1,
				delay: 0.5,
				ease: "bounce.out",
			});

			gsap.to(logo.current, {
				delay: 1.5,
				transform: "translateX(720px)",
				ease: "power4.out",
				duration: 1.5,
			});

			gsap.to(title.current, {
				clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
				duration: 1.35,
				delay: 1.5,
				ease: "power4.out",
			});

			gsap.to(container.current, {
				opacity: 0,
				duration: 0.8,
				delay: 2.8,
				ease: "power4.out",
			});
		});

		return () => {
			ctx.revert();
		};
	});

	return (
		<div ref={container} className={styles.container}>
			<div className={styles.box}>
				<img ref={logo} className={styles.logo} src="svg/logo.svg" alt="Quick Share Light Icon" />
				<h1 ref={title} className={styles.title}>
					Quick Share
				</h1>
			</div>
		</div>
	);
}

export default EnterAnimation;
