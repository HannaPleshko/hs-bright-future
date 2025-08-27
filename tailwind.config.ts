import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Cyber colors
				'cyber-blue': 'hsl(var(--cyber-blue))',
				'cyber-purple': 'hsl(var(--cyber-purple))',
				'cyber-pink': 'hsl(var(--cyber-pink))',
				'cyber-orange': 'hsl(var(--cyber-orange))',
				'cyber-green': 'hsl(var(--cyber-green))',
				'cyber-yellow': 'hsl(var(--cyber-yellow))',
				'cyber-red': 'hsl(var(--cyber-red))',
				'cyber-teal': 'hsl(var(--cyber-teal))',
				// Legacy neon colors for backward compatibility
				'neon-blue': 'hsl(var(--neon-blue))',
				'neon-purple': 'hsl(var(--neon-purple))',
				'neon-pink': 'hsl(var(--neon-pink))',
				'neon-orange': 'hsl(var(--neon-orange))',
				'neon-green': 'hsl(var(--neon-green))',
				'neon-yellow': 'hsl(var(--neon-yellow))',
				'neon-red': 'hsl(var(--neon-red))',
				'neon-teal': 'hsl(var(--neon-teal))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				"float-cyber": {
					"0%, 100%": { transform: "translateY(0px) rotate(0deg) scale(1)" },
					"25%": { transform: "translateY(-15px) rotate(1deg) scale(1.02)" },
					"50%": { transform: "translateY(-25px) rotate(2deg) scale(1.05)" },
					"75%": { transform: "translateY(-15px) rotate(1deg) scale(1.02)" },
				},
				"pulse-cyber": {
					"0%": { 
						boxShadow: "0 0 10px hsla(var(--cyber-pink), 0.3)" 
					},
					"100%": { 
						boxShadow: "0 0 40px hsla(var(--cyber-pink), 0.7), 0 0 60px hsla(var(--cyber-blue), 0.5)" 
					},
				},
				"cyber-morph": {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" },
				},
				"fadeInCyber": {
					from: { opacity: "0", transform: "scale(0.9)" },
					to: { opacity: "1", transform: "scale(1)" },
				},
				"fadeInUpCyber": {
					from: { 
						opacity: "0",
						transform: "translateY(40px) scale(0.9)",
					},
					to: { 
						opacity: "1",
						transform: "translateY(0) scale(1)",
					},
				},
				"textShineCyber": {
					to: { backgroundPosition: "200% center" },
				},
				"shimmerCyber": {
					"0%": { backgroundPosition: "-200% 0" },
					"100%": { backgroundPosition: "200% 0" },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				"float-cyber": "float-cyber 8s ease-in-out infinite",
				"float-cyber-delayed": "float-cyber 8s ease-in-out infinite 2s",
				"float-cyber-slow": "float-cyber 10s ease-in-out infinite",
				"pulse-cyber": "pulse-cyber 3s ease-in-out infinite alternate",
				"cyber-morph": "cyber-morph 20s ease infinite",
				"fadeInCyber": "fadeInCyber 1s ease-out forwards",
				"fadeInUpCyber": "fadeInUpCyber 1s ease-out forwards",
				"textShineCyber": "textShineCyber 4s linear infinite",
				"shimmerCyber": "shimmerCyber 2s infinite",
			},
			backgroundImage: {
				'gradient-cyber-primary': 'var(--gradient-cyber-primary)',
				'gradient-cyber-secondary': 'var(--gradient-cyber-secondary)',
				'gradient-cyber-accent': 'var(--gradient-cyber-accent)',
				'gradient-cyber-dark': 'var(--gradient-cyber-dark)',
				'gradient-cyber-light': 'var(--gradient-cyber-light)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
