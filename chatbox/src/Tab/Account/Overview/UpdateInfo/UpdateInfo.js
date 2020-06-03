import React, { useState } from "react"
import { Button, message } from "antd"
import { LeftOutlined, LoadingOutlined } from "@ant-design/icons"

import Header from "components/Header"
import UserInfoForm from "components/UserInfoForm"
import { updateInfo } from "./service"
import storageManager from "storage"
import LoadingAlert from "components/Alert/LoadingAlert"

const UpdateInfo = ({ account, back }) => {
	const [loading, setLoading] = useState(false)

	const onFinish = async values => {
		console.debug("Received values of form: ", values)
		setLoading(true)

		try {
			const resp = await updateInfo(values)

			message.success("保存成功！")
			storageManager.set("account", resp.data)
		} catch (error) {
			message.error("保存失败！")
			console.error(error)
		}
		setLoading(false)
	}

	return (
		<>
			<Header
				leftItems={
					<>
						<Button icon={<LeftOutlined />} onClick={back} />
					</>
				}
				centerItems={<span>编辑资料</span>}
			/>
			{loading && <LoadingAlert text="保存中。。。" />}

			<div style={{ flexGrow: 1, overflowY: "auto", paddingBottom: 30 }}>
				<UserInfoForm
					user={account}
					fields={["name", "about", "avatar"]}
					submit={onFinish}
					submitBtn={
						<>
							<Button
								type="primary"
								className="login-form-button"
								htmlType="submit"
								disabled={loading}
							>
								保存
							</Button>
						</>
					}
				/>
			</div>
		</>
	)
}

export default UpdateInfo