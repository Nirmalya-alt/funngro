
import React, { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

// Fixed: Explicitly extend React.Component to resolve "Property does not exist" errors for state and props
class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReset = () => {
    // Fixed: Correctly referencing setState from the class instance
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
          <div className="max-w-md w-full glass p-8 rounded-[40px] border-red-500/20 text-center">
            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            <h1 className="text-2xl font-black text-white mb-4">Something went wrong</h1>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We encountered an unexpected error. Don't worry, your progress is safe. Please try refreshing or going back home.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full py-4 bg-green-500 text-slate-950 font-black rounded-2xl hover:bg-green-400 transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" /> Refresh Page
              </button>
              <button
                onClick={this.handleReset}
                className="w-full py-4 glass border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" /> Back to Home
              </button>
            </div>
            {/* Fix: Use import.meta.env for Vite instead of process.env */}
            {import.meta.env.DEV && (
              <div className="mt-8 p-4 bg-black/50 rounded-xl text-left overflow-auto max-h-40">
                <code className="text-xs text-red-400">{this.state.error?.toString()}</code>
              </div>
            )}
          </div>
        </div>
      );
    }

    // Fixed: Correctly referencing props from the class instance
    return this.props.children;
  }
}

export default ErrorBoundary;
