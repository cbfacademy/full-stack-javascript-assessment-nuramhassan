import { useParams } from "react-router-dom";

export default function CompanyDetails() {
    const params = useParams()

    return (
        <>
        <h1> Company Details</h1>
        <p> The Company ID is {params.id}</p>
        </>
    )
}