import supabase from "./client";

export async function uploadPdf(file: File, userId: string) {
  if (!file || file.size === 0) {
    throw new Error("File kosong");
  }

  const path = `${userId}/${file.name}`;
  const { data, error } = await supabase.storage
    .from("upload-cv")
    .upload(path, file, {
      contentType: "application/pdf",
      upsert: true,
    });

  if (error) {
    console.error("Upload error:", error);
    throw error;
  }

  console.log("Upload success:", data);
  return data;
}
