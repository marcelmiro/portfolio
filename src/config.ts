// @ts-ignore
import type { Props as ProjectProps } from './components/Project.astro'

export const defaultMeta = {
	title: 'Marcel Miro',
}

// TODO: Add Jupiter Notify to projects

export const projects: ProjectProps[] = [
	{
		title: 'NFT mobile app',
		description:
			'Mobile app used to own NFTs. It uses custom authentication to allow users to create wallets with email and password. No mnemonic and seed phrase needed!',
		imageUri: '/projects/nft-wallet.png',
		tags: [
			'Typescript',
			'Expo (React Native)',
			'NextJS',
			'Prisma (MySQL)',
			'tRPC',
			'Moralis',
			'SCSS',
		],
		date: 'November 2022',
	},
	{
		title: 'USC Startups',
		href: 'https://uscstartups.io/',
		description:
			'Public collection of startups founded by University of Southern California students and alumni. It also includes an in-platform job board.',
		imageUri: '/projects/uscstartups.png',
		tags: [
			'Astro',
			'Typescript',
			'Preact',
			'TailwindCSS',
			'Airtable',
			'Prisma (MySQL)',
		],
		date: 'October 2022',
	},
	{
		title: 'StarKeys',
		href: 'https://starkeys.io/',
		description:
			'League tables for startups. The most promising startups are ranked based on extensive analytical data.',
		imageUri: '/projects/starkeys.png',
		tags: ['Astro', 'Typescript', 'Preact', 'TailwindCSS', 'Sanity'],
		date: 'September 2022',
	},
	{
		title: 'NFT License Collection',
		href: 'https://nft-license-collection.vercel.app/',
		sourceHref: 'https://github.com/marcelmiro/nft-license-collection',
		description:
			'NFT collection hosted in Rinkeby testnet blockchain. The smart contract that powers the website is inspired by traditional subscription methods, to allow NFTs to represent an active service. For example, this smart contract could be used to represent software licenses. Additionally, the ERC721 contract features on-chain metadata and has the ability to rent each individual NFT to other users.',
		imageUri: '/projects/nft-license-collection.png',
		tags: [
			'Solidity',
			'Hardhat',
			'Typescript',
			'NextJS',
			'Moralis',
			'SCSS',
		],
		date: 'July 2022',
	},
	{
		title: 'Astrano',
		href: 'https://astrano.io/',
		sourceModal: 'astrano-source',
		description:
			'Decentralized app hosted on the Ethereum blockchain. It focuses on providing financial assistance to businesses and entrepreneurs through the use of cryptocurrency technologies. The smart contract includes advanced tokenomics that incentivize the usage of tokens and prevent pump-and-dump schemes.',
		imageUri: '/projects/astrano.png',
		tags: [
			'Solidity',
			'Hardhat',
			'Typescript',
			'NextJS',
			'ExpressJS',
			'MongoDB',
			'SCSS',
		],
		date: 'February 2022',
	},
]
