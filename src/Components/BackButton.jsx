import { useNavigate } from 'react-router-dom'

export default function BackButton() {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <span 
            onClick={handleBack}
            className="text-purple-400 underline hover:text-purple-300 transition-colors cursor-pointer"
        >
            back
        </span>
    )
}