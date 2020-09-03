import React from "react"
import { Link } from "gatsby"
import { Heading, Text, SearchInput, HStack, Icon, Spacer, View, Placeholder, Grid, Button } from "@wp-g2/components"
import { ui } from "@wp-g2/styles"
import { Layout } from "../core"
import { FiArrowLeft } from '@wp-g2/icons'

function Page() {
	return (
		<Layout title="Plugins">
			<View css={ "max-width: 900px; margin: 36px auto;" }>
				<Link to="/">
					<Icon icon={ <FiArrowLeft /> } />
				</Link>
				<Spacer my={ 8 }>
					<Heading size={ 1 }>Add New</Heading>
				</Spacer>
				<Placeholder height={ "200px" }>
					<HStack alignment={ "center" }>
						<Text>Select a plugin</Text>
						<Button>Upload</Button>
					</HStack>
				</Placeholder>
			</View>
		</Layout>
	)
}

export default Page
