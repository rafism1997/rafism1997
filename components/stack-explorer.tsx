"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { stack } from "@/lib/site-data"
import { cn } from "@/lib/utils"

const suggestions = ["agent", "rag", "mlflow", "aws", "edge"]
const totalEntries = stack.reduce((sum, category) => sum + category.items.length, 0)

export function StackExplorer() {
  const [query, setQuery] = useState("")
  const term = query.trim().toLowerCase()
  const filtering = term.length > 0

  const categories = stack.map((category) => {
    const categoryMatches = category.label.toLowerCase().includes(term)
    const items = category.items.map((item) => ({
      ...item,
      matches:
        categoryMatches ||
        item.name.toLowerCase().includes(term) ||
        (item.detail?.toLowerCase().includes(term) ?? false),
    }))
    return { ...category, items, matchCount: items.filter((item) => item.matches).length }
  })

  const matchedEntries = categories.reduce((sum, category) => sum + category.matchCount, 0)
  const status = !filtering
    ? `${totalEntries} entries in ${stack.length} categories`
    : matchedEntries === 0
      ? `No match for "${query.trim()}"`
      : `${matchedEntries} of ${totalEntries} entries match "${query.trim()}"`

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="flex h-11 w-full items-center gap-3 border border-border bg-card px-3 transition-colors focus-within:border-primary sm:max-w-md">
            <Search aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
            <label htmlFor="stack-filter" className="sr-only">
              Filter the stack
            </label>
            <input
              id="stack-filter"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Filter: bedrock, langgraph, jetson"
              autoComplete="off"
              spellCheck={false}
              className="h-full w-full min-w-0 bg-transparent font-mono text-base outline-none placeholder:text-muted-foreground sm:text-sm [&::-webkit-search-cancel-button]:appearance-none"
            />
            {filtering ? (
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                aria-label="Clear filter"
                onClick={() => setQuery("")}
              >
                <X aria-hidden="true" />
              </Button>
            ) : null}
          </div>
          <p aria-live="polite" className="eyebrow text-muted-foreground">
            {status}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="eyebrow pr-1 text-muted-foreground">Try</span>
          {suggestions.map((suggestion) => (
            <Button
              key={suggestion}
              type="button"
              variant="outline"
              size="sm"
              aria-pressed={term === suggestion}
              onClick={() => setQuery(term === suggestion ? "" : suggestion)}
              className="h-7 font-mono text-xs aria-pressed:border-primary aria-pressed:text-primary"
            >
              {suggestion}
            </Button>
          ))}
        </div>
      </div>

      <ul className="flex flex-col border-t border-border">
        {categories.map((category, index) => (
          <li
            key={category.id}
            className="grid gap-4 border-b border-border py-6 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-8"
          >
            <div
              className={cn(
                "flex items-baseline gap-3 transition-opacity md:flex-col md:gap-2",
                filtering && category.matchCount === 0 && "opacity-40",
              )}
            >
              <span aria-hidden="true" className="eyebrow text-primary">
                {`04.${String(index + 1).padStart(2, "0")}`}
              </span>
              <h3 className="font-medium leading-snug">{category.label}</h3>
            </div>
            <ul className="flex flex-wrap content-start items-start gap-2">
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className={cn(
                    "max-w-full border px-3 py-1.5 text-sm leading-snug transition-[opacity,border-color,background-color]",
                    filtering && item.matches ? "border-primary/70 bg-primary/10" : "border-border",
                    filtering && !item.matches && "opacity-35",
                  )}
                >
                  <span className="font-medium">{item.name}</span>
                  {item.detail ? <span className="text-muted-foreground">{` · ${item.detail}`}</span> : null}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
