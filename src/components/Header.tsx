import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-bold">OR</span>
          </div>
          <span className="font-semibold text-lg">OpenRouter</span>
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search models" 
            className="pl-10 bg-background"
          />
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Models</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Chat</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Rankings</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Docs</a>
        <Button variant="outline" size="sm">Sign In</Button>
      </nav>

      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="w-5 h-5" />
      </Button>
    </header>
  );
};

export default Header;