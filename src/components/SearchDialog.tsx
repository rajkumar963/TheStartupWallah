
import React, { useState } from "react";
import { X, Search, ArrowRight } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Input } from "./ui/input";
import { blogPosts } from "./BlogPreview";
import { caseStudies } from "./CaseStudies";
import { useNavigate } from "react-router-dom";

type SearchResult = {
  id: number;
  title: string;
  type: "blog" | "case-study";
  url: string;
  excerpt?: string;
  category: string;
};

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();

  // Convert blog posts and case studies to searchable items
  const searchableItems: SearchResult[] = [
    ...blogPosts.map((post) => ({
      id: post.id,
      title: post.title,
      type: "blog" as const,
      url: `/blog#${post.id}`,
      excerpt: post.excerpt,
      category: post.category,
    })),
    ...caseStudies.map((study) => ({
      id: study.id,
      title: study.title,
      type: "case-study" as const,
      url: `/case-studies#${study.id}`,
      excerpt: study.description,
      category: study.category,
    })),
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setResults([]);
      return;
    }

    // Simple search implementation - searches in title, excerpt and category
    const filtered = searchableItems.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        (item.excerpt && item.excerpt.toLowerCase().includes(query.toLowerCase())) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  };

  const handleResultClick = (result: SearchResult) => {
    onOpenChange(false);
    navigate(result.url);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <Search className="h-5 w-5 text-muted-foreground mr-2" />
            <Input
              placeholder="Search for articles, case studies, and more..."
              value={searchQuery}
              onChange={handleSearch}
              className="border-none shadow-none focus-visible:ring-0 flex-1"
              autoFocus
            />
            <button onClick={() => onOpenChange(false)} className="text-muted-foreground">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {results.length > 0 ? (
          <div className="max-h-[60vh] overflow-y-auto p-2">
            {results.map((result) => (
              <div
                key={`${result.type}-${result.id}`}
                className="p-3 hover:bg-muted rounded-md cursor-pointer group"
                onClick={() => handleResultClick(result)}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                        {result.type === "blog" ? "Blog" : "Case Study"}
                      </span>
                      <span className="text-xs text-muted-foreground">{result.category}</span>
                    </div>
                    <h4 className="font-medium text-foreground mb-1">{result.title}</h4>
                    {result.excerpt && (
                      <p className="text-sm text-muted-foreground line-clamp-1">{result.excerpt}</p>
                    )}
                  </div>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity h-4 w-4 text-primary mt-1" />
                </div>
              </div>
            ))}
          </div>
        ) : searchQuery !== "" ? (
          <div className="p-6 text-center">
            <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
