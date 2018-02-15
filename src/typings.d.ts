/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface YTPlayerConfig {
  shouldLoadAPI?: boolean;
  multiplePlaying?: boolean;
}
