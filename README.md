# Zerble Time Machine

Play the history at [game-archive.zerble.net](https://game-archive.zerble.net/), or visit the [current game](https://game.zerble.net/).

This single repository hosts every historical snapshot. The `main` branch contains the publishing workflow, while `site` holds the generated timeline and immutable snapshot directories. The game source, archive builder, milestone catalog and operating guide live in [zerble-at-the-festival](https://github.com/GaryReckard/zerble-at-the-festival/blob/main/docs/time-machine.md).

To publish another commit, open [Publish Time Machine](https://github.com/GaryReckard/zerble-game-archive/actions/workflows/publish.yml), choose **Run workflow**, and enter its commit hash or tag as `source_ref`. Use `milestones` to refresh the curated collection and discover `time-machine/*` tags; the scheduled workflow also checks twice an hour.

Archived progress and analytics cookies stay in memory and disappear on reload or departure. Each snapshot identifies its source commit and adapter, and carries a checksum manifest. Compatibility fixes receive a new directory rather than replacing existing URLs.
