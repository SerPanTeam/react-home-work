export const API_URL = "https://pocketbase-on-fly.fly.dev";

export function createAvatarUrl(userData) {
  return `${API_URL}/api/files/${userData.collectionId}/${userData.id}/${userData.avatar}`;
}
