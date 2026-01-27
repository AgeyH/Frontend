import { useState } from "react";
import "../../styles/staff/knowledgeBase.css";

const articles = [
  {
    id: 1,
    title: "Fix Email Not Syncing",
    category: "Email",
    content: "Check Outlook settings, re-add account, verify internet access.",
  },
  {
    id: 2,
    title: "Printer Offline Troubleshooting",
    category: "Hardware",
    content: "Restart printer, check cable, reinstall drivers.",
  },
  {
    id: 3,
    title: "VPN Connection Issues",
    category: "Network",
    content: "Verify credentials, restart VPN client, check firewall.",
  },
];

const KnowledgeBase = () => {
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.category.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="kb-page">
      <h2>Knowledge Base</h2>
      <p className="kb-subtitle">Quick solutions for common IT issues</p>

      <input
        type="text"
        placeholder="Search articles..."
        className="kb-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="kb-list">
        {filteredArticles.map((article) => (
          <div className="kb-card" key={article.id}>
            <h3>{article.title}</h3>
            <span className="kb-category">{article.category}</span>
            <p>{article.content}</p>
          </div>
        ))}

        {filteredArticles.length === 0 && (
          <p className="kb-empty">No matching articles found.</p>
        )}
      </div>
    </div>
  );
};

export default KnowledgeBase;
