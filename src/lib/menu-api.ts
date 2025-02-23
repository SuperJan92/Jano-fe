interface MenuItem {
    id: string;
    url: string;
    title: string;
}

const apiKey = import.meta.env.VITE_WP_KEY;
const API_BASE = "https://admin.janvanerkel.nl/wp-json/wp/v2";

export async function getMenu(menuId: number): Promise<MenuItem[]> {
    try {
        const response = await fetch(`${API_BASE}/menus/${menuId}/items`, {
            headers: {
                "X-API-KEY": apiKey,
            },
        });

        if (!response.ok) {
            throw new Error(`Fout bij het ophalen van menu-items: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (e) {
        throw e;
    }
} 