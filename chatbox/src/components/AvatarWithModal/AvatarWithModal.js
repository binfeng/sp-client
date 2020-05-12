import "./AvatarWithModal.css"

import React, { useState } from "react"
import { Avatar, Popover, Button } from "antd"
import {
	MailOutlined,
	StopOutlined,
	FlagOutlined,
	UserAddOutlined
} from "@ant-design/icons"
import ProfileModal from "components/ProfileModal"

function AvatarWithModal({ user, messageUser, popoverPlacement }) {
	const [showModal, setShowModal] = useState(false)
	return (
		<>
			<Popover
				overlayClassName="sp-message-menu"
				placement={popoverPlacement}
				content={
					<div>
						<Button
							onClick={() => {
								messageUser(user)
							}}
							icon={<UserAddOutlined />}
						/>
						<Button
							onClick={() => {
								messageUser(user)
							}}
							icon={<MailOutlined />}
						/>
						<Button
							danger
							onClick={() => {
								messageUser(user)
							}}
							icon={<StopOutlined />}
						/>
						{/* <Button
							onClick={() => {
								messageUser(user)
							}}
							icon={<FlagOutlined />}
						/> */}
					</div>
				}
				trigger="hover"
			>
				<Avatar
					onClick={() => {
						setShowModal(true)
					}}
					style={{ cursor: "pointer" }}
					size="large"
					src={user.avatarSrc}
				/>
			</Popover>
			{showModal && (
				<ProfileModal
					user={user}
					messageUser={messageUser}
					setShowModal={setShowModal}
				/>
			)}
		</>
	)
}

export default AvatarWithModal
