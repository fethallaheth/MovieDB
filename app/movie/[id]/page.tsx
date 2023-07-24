export const dynamic = "force-dynamic";
import SubmitButton from "../../components/SubmitButton";



export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className="rounded-lg border p-3">
      <h1 className="text-xl font-semibold mb-5">Your Opinion</h1>
      <div>
        <form >
          <textarea
            name="comment"
            className="w-full border border-teal-500 rounded-lg p-2"
            placeholder="add your comment..."
          ></textarea>
          <input type="hidden" name="id" value={params.id} />
          <SubmitButton />
        </form>        
      </div>
    </div>
  );
}
