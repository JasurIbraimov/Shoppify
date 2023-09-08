import Modal from "@/components/Modal"
import ProductForm from "@/components/ProductForm"
import { getCurrentUser } from "@/lib/session"
import { redirect } from "next/navigation"

const AddProduct = async () => {
    const session = await getCurrentUser()
    if(!session?.user) redirect("/")
    return (
    <Modal>
        <h3 className="modal-head-text">Add a new Product</h3>
        <ProductForm type="create" session={session} />

    </Modal>
  )
}

export default AddProduct