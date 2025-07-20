import supabase from "./client";

export async function downloadPDF(link: string) {
  const { data } = await supabase.storage.from("upload-cv").getPublicUrl(link);

  return data.publicUrl;
}
