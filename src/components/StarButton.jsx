import { Button } from 'antd'
import { StarFilled, StarOutlined } from "@ant-design/icons"

export const StarButton = ({ onClick, isFavorite }) => {
  const icon = isFavorite ? <StarFilled /> : <StarOutlined />
  return (
    <Button onClick={onClick} icon={icon} />
  )
}